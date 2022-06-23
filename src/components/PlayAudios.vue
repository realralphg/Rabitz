<template>
  <div class="wrapper">
    <div class="">
      <!-- {{ playlister }} -->
      <div class="">
        <template v-for="song in songgs">
          <div
            :class="
              !showLength
                ? 'song q-my-md row  justify-between items-center'
                : 'song q-my-md row no-wrap justify-between items-center'
            "
          >
            <div style="gap: 0.75rem" class="song_img row no-wrap items-center">
              <div class="song_cover">
                <img
                  style="width: 60px; height: 60px; border-radius: 10px"
                  :src="song.cover_art_url"
                  alt=""
                  class="img-fluid rounded"
                />
              </div>
              <div :class="!showLength ? 'song_det text-white' : 'song_det'">
                <p class="song-title mt-2">{{ song.title }}</p>
                <p class="song-artiste">{{ song.artist }}</p>
              </div>
            </div>
            <div class="wrapper">
              <div
                class="overlay-play text-center"
                v-if="isPlaying && currentSong.id === song.id"
                @click="pause"
              >
                <!-- <i class="icon ion-ios-pause"></i> -->
                <i class="ri-pause-fill"></i>
              </div>

              <div class="overlay-play text-center" @click="play(song)" v-else>
                <!-- <i class="icon ion-ios-play"></i> -->
                <i class="ri-play-fill"></i>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div v-if="showLength" class="music-player">
      <!-- the playlist -->
      <div class="">
        <transition name="height">
          <div
            class="playlist"
            :class="showPlaylist ? 'show' : 'hide'"
            v-if="showPlaylist"
          >
            <div class="wrap">
              <div
                class="song-wrap"
                v-for="song in playlister.songs"
                @click="play(song)"
              >
                <div
                  class="song-details"
                  style="display: flex; align-content: space-between"
                >
                  <div>
                    <span class="play">
                      <i
                        class="ri-pause-fill"
                        v-if="isPlaying && currentSong.id === song.id"
                      ></i>
                      <i class="ri-play-fill" v-else></i>
                    </span>
                    {{ song.title }}
                  </div>
                  <div>
                    <span>
                      <img
                        class="music-bars-gif"
                        src="https://res.cloudinary.com/dmf10fesn/image/upload/v1548886976/audio/assets/animated-sound-bars.gif"
                        v-if="isPlaying && currentSong.id === song.id"
                      />
                    </span>
                    {{ song.artist }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- end of playlist -->

      <!-- the audio player code starts here -->
      <div class="player" id="player">
        <div class="q-pr-md">
          <div class="player-contents-wrap">
            <div class="album-art">
              <img :src="currentSong.cover_art_url" class="img" />
            </div>

            <div class="main-controls">
              <div class="controls">
                <div class="skip-backward">
                  <i class="ri-skip-back-fill" @click="skip('backward')"></i>
                </div>

                <div class="play">
                  <i
                    class="ri-play-fill"
                    v-if="!isPlaying"
                    @click="playCurrentSong"
                  ></i>
                  <i class="ri-pause-fill" v-else @click="pause"></i>
                </div>

                <div class="skip-forward">
                  <i class="ri-skip-forward-fill" @click="skip('forward')"></i>
                </div>
              </div>

              <div class="seek">
                <div class="title-and-time">
                  <div class="title">
                    {{ currentSong.title }}: {{ currentSong.artist }}
                  </div>

                  <div class="time">
                    {{ currentPlayedTime }} / {{ duration }}
                  </div>
                </div>

                <div class="progress-container">
                  <div class="progress" id="progress-wrap">
                    <div
                      class="progress-handle"
                      :style="{ left: progressPercentageValue }"
                    ></div>

                    <div class="transparent-seeker-layer" @click="seek"></div>

                    <div
                      class="bar"
                      :style="{ width: progressPercentageValue }"
                    ></div>
                  </div>
                </div>

                <div class="extra-controls">
                  <div class="playlist-icon" @click="toggleShowPlaylist">
                    <i class="ri-play-list-fill"></i>
                  </div>

                  <div class="repeat">
                    <div class="repeat-info" v-if="onRepeat">
                      {{ loop.value }}
                    </div>
                    <i class="ri-repeat-fill" @click="repeat"></i>
                  </div>

                  <div class="shuffle-icon">
                    <i class="ri-shuffle-fill" @click="shuffleToggle"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- the audio player code ends here -->
    </div>

    <audio
      :loop="innerLoop"
      ref="audiofile"
      :src="defaultSong"
      preload
      style="display: none"
      controls
    ></audio>
  </div>
</template>

<script>
export default {
  props: ["songgs", "playlister", "showLength"],
  data() {
    return {
      defaultSong:
        "https://rabitzsongs.cf/BocMadaki_That_Hausa_Rapper_360Hausa_Com_Ng.mp3",
      isPlaying: false,
      isLoaded: false,
      isCurrentlyPlaying: "",
      onRepeat: false,
      shuffle: false,

      loop: {
        state: false,
        value: 1,
      },

      durationSeconds: 0,
      currentSeconds: 0,
      audioPlayer: undefined,
      previousVolume: 35,
      volume: 100,
      autoPlay: false,
      progressPercentageValue: "0%",

      songs: [
        {
          id: 1,
          title: "Wow",
          artist: "Post Malone",
          album: "",
          url: "https://rabitzsongs.cf/BocMadaki_That_Hausa_Rapper_360Hausa_Com_Ng.mp3",
          cover_art_url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
        },
        {
          id: 3,
          title: "Gods Plan",
          artist: "Drake",
          album: "",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
          cover_art_url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
        },

        {
          id: 6,
          title: "Hamble",
          artist: "Kendrick Lamar",
          album: "",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
          cover_art_url: "/images/gojeje.jpeg",
        },
        {
          id: 5,
          title: "Chilling",
          artist: "Kwesi Arthur",
          album: "",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
          cover_art_url: "/images/gojeje.jpeg",
        },
        {
          id: 2,
          title: "Better Now",
          artist: "Post Malone",
          album: "",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
          cover_art_url: "/images/gojeje.jpeg",
        },

        {
          id: 4,
          title: "Dont Kill My Vibe",
          artist: "Kendrick Lamar",
          album: "",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
          cover_art_url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg",
        },
      ],

      playlist: {
        currentIndex: 0,

        songs: [
          {
            id: 1,
            title: "Go Jeje",
            artist: "Jordan Bangoji",
            album: "",
            url: "https://rabitzsongs.cf/songs/GOJEJE.mp3",
            cover_art_url: "/images/gojeje.jpeg",
          },
        ],
      },
      previousPlaylistIndex: 0,
      hasNext: false,
      originalSongArray: [],

      currentSong: {
        id: "",
        title: "",
        artist: "",
        album: "",
        url: "",
        cover_art_url: "/images/gojeje.jpeg",
      },

      /** ui control variables*/

      showPlaylist: false,
    };
  },

  created() {
    this.innerLoop = this.loop.state;
  },

  mounted() {
    this.audioPlayer = this.$el.querySelectorAll("audio")[0];
    this.initPlayer();
  },

  methods: {
    /** UI control methods
     * these methods are used to control the ui*/

    toggleShowPlaylist() {
      this.showPlaylist = !this.showPlaylist;
    },

    /**Music player methods
     * these methods are used to control the music player*/

    initPlayer() {
      this.audioPlayer.src = this.playlist.songs[0].url;
      this.setCurrentSong(this.playlist.songs[0]);

      this.audioPlayer.addEventListener("timeupdate", this.updateTimer);
      this.audioPlayer.addEventListener("loadeddata", this.load);
      this.audioPlayer.addEventListener("pause", () => {
        this.isPlaying = false;
      });
      this.audioPlayer.addEventListener("play", () => {
        this.isPlaying = true;
      });

      this.audioPlayer.addEventListener("ended", this.playNextSongInPlaylist);
    },

    play(song = {}) {
      if (typeof song === "object") {
        if (this.isLoaded) {
          //check if song exists in playlist

          if (this.currentSong.id === song.id && this.isPlaying) {
            this.pause();
          } else if (this.currentSong.id === song.id && !this.isPlaying) {
            this.playCurrentSong();
          } else if (this.currentSong.id !== song.id) {
            if (!this.containsObjectWithSameId(song, this.playlist.songs)) {
              this.addToPlaylist(song);
            } else {
              console.log("playMethod", "song already in playlist");
            }

            this.setAudio(song.url);
            this.setCurrentSong(song);
            this.playlist.currentIndex = this.getObjectIndexFromArray(
              song,
              this.playlist.songs
            );
            this.previousPlaylistIndex = this.playlist.currentIndex;
            this.audioPlayer.play();
          }
        } else {
          this.setAudio(song.url);
          this.audioPlayer.play();
        }

        this.isPlaying = true;
      } else {
        throw new Error("Type Error : Song must be an object");
      }
    },

    playCurrentSong() {
      this.audioPlayer.play();
      this.isPlaying = true;
    },

    stop() {
      this.audioPlayer.currentTime = 0;
    },

    pause() {
      this.audioPlayer.pause();
      this.isPlaying = false;
    },

    repeat() {
      if (!this.loop.state && !this.onRepeat) {
        //firstclick
        this.loop.state = true;
        this.loop.value = 1;
        this.onRepeat = true;
      } else if (this.loop.state && this.onRepeat && this.loop.value === 1) {
        //second click
        this.loop.state = true;
        this.loop.value = "all";
        this.onRepeat = true;
      } else if (
        this.loop.state &&
        this.onRepeat &&
        this.loop.value === "all"
      ) {
        this.loop.state = false;
        this.loop.value = 1;
        this.onRepeat = false;
      }
    },

    skip(direction) {
      if (direction === "forward") {
        this.playlist.currentIndex += 1;
      } else if (direction === "backward") {
        this.playlist.currentIndex -= 1;
      }

      /**if the current Index of the playlist is greater or equal to the length of the playlist songs (the index is out of range)
       reset the index to 0. It could also mean that the playlist is at its end. */

      if (this.playlist.currentIndex >= this.playlist.songs.length) {
        this.playlist.currentIndex = 0;
      }

      if (this.playlist.currentIndex < 0) {
        this.playlist.currentIndex = this.playlist.songs.length - 1;
      }

      this.audioPlayer.src =
        this.playlist.songs[this.playlist.currentIndex].url;
      this.setCurrentSong(this.playlist.songs[this.playlist.currentIndex]);

      //the code below checks if a song is playing so it can go ahead and auto play
      if (this.isPlaying) {
        this.audioPlayer.play();
      }
    },

    mute() {
      //this.muted is a computed variable available down below

      if (this.muted) {
        return (this.volume = this.previousVolume);
      } else {
        this.previousVolume = this.volume;
        this.volume = 0;
      }
    },

    updateTimer() {
      this.currentSeconds = parseInt(this.audioPlayer.currentTime);
      this.progressPercentageValue =
        ((this.currentSeconds / parseInt(this.audioPlayer.duration)) * 100 ||
          0) + "%";
    },

    seek(e) {
      if (this.isLoaded) {
        let el = e.target.getBoundingClientRect();
        let seekPos = (e.clientX - el.left) / el.width;
        let seekPosPercentage = seekPos * 100 + "%";

        /**
         *  calculating the portion of the song based on where the user clicked
         *
         */

        let songPlayTimeAfterSeek = parseInt(
          this.audioPlayer.duration * seekPos
        );

        this.audioPlayer.currentTime = songPlayTimeAfterSeek;

        this.progressPercentageValue = seekPosPercentage;
        console.log(this.progressPercentageValue);
      } else {
        throw new Error("Song Not Loaded");
      }
    },

    addAndPlayNext() {
      let selectedSong = {
        title: "Song Name 3",
        artist: "Artist Name",
        album: "Album Name",
        url: "./song2.mp3",
        cover_art_url: "/cover/art/url.jpg",
        isPlaying: false,
      };

      //add the song to the playlist

      //get the index of the song that is currently being played in the player

      //insert the song at that position

      let indexOfCurrentSong = this.playlist.currentIndex;

      this.playlist.songs.splice(indexOfCurrentSong + 1, 0, selectedSong);
    },

    addToPlaylist(song) {
      this.playlist.songs.unshift(song);
    },

    dragSeek(e) {
      let el = e.target.getBoundingClientRect();
    },

    playNextSongInPlaylist() {
      if (this.onRepeat && this.loop.value === 1) {
        this.audioPlayer.play();
      } else {
        if (this.playlist.songs.length > 1) {
          if (this.random) {
            //generate a random number
            let randomNumber = this.generateRandomNumber(
              0,
              this.playlist.songs.length - 1,
              this.previousPlaylistIndex
            );

            //set the current index of the playlist
            this.playlist.currentIndex = randomNumber;

            //set the src of the audio player
            this.audioPlayer.src =
              this.playlist.songs[this.playlist.currentIndex].url;
            //set the current song
            this.setCurrentSong(
              this.playlist.songs[this.playlist.currentIndex]
            );
            //begin to play
            this.audioPlayer.play();
          } else {
            /**if the current Index of the playlist is equal to the index of the last song played skip that song
             and add 1*/

            if (this.playlist.currentIndex === this.previousPlaylistIndex) {
              //increment the current index of the playlist by 1
              this.playlist.currentIndex += 1;
            }

            /**if the current Index of the playlist is greater or equal to the length of the playlist songs (the index is out of range)
             reset the index to 0. It could also mean that the playlist is at its end. */

            if (this.playlist.currentIndex >= this.playlist.songs.length) {
              if (this.onRepeat && this.loop.value === "all") {
                //if repeat is on then replay from the top
                this.playlist.currentIndex = 0;
              } else {
                return;
              }
            }

            this.audioPlayer.src =
              this.playlist.songs[this.playlist.currentIndex].url;
            this.setCurrentSong(
              this.playlist.songs[this.playlist.currentIndex]
            );
            this.audioPlayer.play();
            this.playlist.currentIndex++;
          }
        } else {
        }
      }
    },

    shuffleToggle() {
      //shuffle the playlist songs and rearrange
      this.playlist.songs = this.shuffleArray(this.playlist.songs);

      //reset the playlist index when changed and rest the previous playlist index
      this.playlist.currentIndex = this.getObjectIndexFromArray(
        this.currentSong,
        this.playlist.songs
      );
      this.previousPlaylistIndex = this.playlist.currentIndex;
    },

    /** Helper methods
     * these methods are usually used within other methods*/

    formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = Math.floor(secs - minutes * 60) || 0;
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },

    setAudio(song) {
      this.audioPlayer.src = song;
    },

    load() {
      if (this.audioPlayer.readyState >= 2) {
        this.isLoaded = true;
        this.durationSeconds = parseInt(this.audioPlayer.duration);
      } else {
        throw new Error("Failed to load sound file.");
      }
    },

    playlistHelper() {},

    containsObjectWithSameId(obj, list) {
      let i;
      for (i = 0; i < list.length; i++) {
        if (list[i].id === obj.id) {
          return true;
        }
      }
    },

    getObjectIndexFromArray(obj, list) {
      //this function just returns the index of the item with the id
      let i;
      for (i = 0; i < list.length; i++) {
        if (list[i].id === obj.id) {
          return i;
        }
      }
    },

    setCurrentSong(song) {
      this.currentSong.id = song.id;
      this.currentSong.title = song.title;
      this.currentSong.artist = song.artist;
      this.currentSong.album = song.album;
      this.currentSong.url = song.url;
      this.currentSong.cover_art_url = song.cover_art_url;

      this.previousPlaylistIndex = this.playlist.currentIndex;
    },

    generateRandomNumber(min, max, except) {
      let num = null;
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num === except ? this.generateRandomNumber(min, max, except) : num;
    },

    shuffleArray(array) {
      let ctr = array.length;
      let temp;
      let index;

      // While there are elements in the array
      while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
      }
      return array;
    },
  },

  computed: {
    currentPlayedTime() {
      return this.formatTime(this.currentSeconds);
    },
    duration() {
      return this.formatTime(this.durationSeconds);
    },
    progressPercentage() {
      return parseInt((this.currentSeconds / this.durationSeconds) * 100);
    },
    muted() {
      //this returns true or false
      return this.volume / 100 === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.song {
  .wrapper {
    position: relative;
    // width: 100%;
    height: auto;
    padding-right: 1rem;
    .overlay-play {
      cursor: pointer;
      // position: absolute;
      width: 40px;
      height: 40px;
      // background-color: #fd6a02;
      background-color: #9d1e81;
      // bottom: 5px;
      // right: 5px;
      border-radius: 50%;
      i {
        font-size: 1.8em;
        line-height: 40px;
        color: #fff;
      }
    }
  }

  .song-title {
    font-weight: 700;
    margin-bottom: 0;
    line-height: auto;
  }

  .song-artiste {
    line-height: auto;
  }
}
.music-player {
  width: 100%;
  bottom: 20%;
  left: 0;
  position: fixed;

  .playlist {
    // width: auto;
    max-width: 400px;
    // background-color: rgba(255, 80, 0, 0.71);
    background-color: rgba(157, 30, 129, 0.71);
    position: relative;
    margin-left: auto;
    z-index: 1;

    .header {
    }

    .show {
      overflow: auto;
    }

    .wrap {
      max-height: 75px;
      overflow: auto;

      .song-wrap {
        height: 25px;
        width: 100%;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        &:not(:last-child) {
          border-bottom: 0.05em solid #cdcdcd;
        }

        .song-details {
          font-size: 0.8em;
          line-height: 25px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding-right: 10px;
          padding-left: 10px;

          span {
            line-height: 15px;

            &.play {
              display: inline-block;
              margin-right: 10px;
              border: 1px solid #fff;
              border-radius: 10px;
              height: 17px;
              width: 17px;
              text-align: center;

              i {
                text-align: center;
              }
            }
          }

          .music-bars-gif {
            height: 10px;
          }
        }
      }

      scrollbar-width: 5px;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background-color: #ccc;
        -webkit-box-shadow: inset 0 0 6px rgb(145, 145, 145);
        border-radius: 0;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-color: #d2d2d2;
        -webkit-box-shadow: inset 0 0 6px rgba(238, 238, 238, 0.5);
      }
    }
  }

  .player {
    //styles for the player
    position: relative;
    z-index: 2;
    width: 80%;
    margin: 0 auto;

    height: 60px;
    background-color: #6f6f6f;

    .player-contents-wrap {
      position: relative;
      width: 100%;
      height: 60px;

      .album-art {
        background-color: white;
        width: 60px;
        height: 60px;

        .img {
          width: 60px;
          height: 60px;
        }
      }

      .main-controls {
        position: absolute;
        right: 0;
        width: calc(100% - 60px);
        height: 60px;
        top: 0;

        i {
          cursor: pointer;
        }

        .controls {
          width: 15%;
          height: 60px;
          display: flex;
          justify-content: space-around;
          text-align: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.05);

          i {
            font-size: 1.8em;
            color: white;
          }

          .play {
            text-align: center;
            border-radius: 25px;
            width: 40px;
            height: 40px;
            border: 1px solid #fff;

            i {
              line-height: 40px;
              text-align: center;
            }
          }

          .pause {
          }
        }

        .seek {
          padding-left: 20px;
          padding-top: 0;
          position: absolute;
          height: 60px;
          width: 85%;
          top: 0;
          left: unset;
          right: 0;
          color: #fff;

          .title-and-time {
            height: 25px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .title {
            }

            .time {
            }
          }

          .progress-container {
            position: relative;
            height: 10px;
            width: auto;
            display: flex;
            align-items: center;

            .progress {
              background-color: rgba(0, 0, 0, 0.05);
              height: 4px;
              //width: calc(75% - 30px);
              width: 100%;
              margin: 0;
              padding: 0 2px;
              border-radius: 0;
              display: flex;
              align-items: center;

              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

              .progress-handle {
                display: block;
                position: absolute;
                z-index: 6;
                margin-top: 0;
                margin-left: -2px;
                width: 8px;
                height: 8px;
                border-radius: 100%;
                background-color: #fff;
                box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
                cursor: pointer;

                &:hover {
                  background-color: #000;
                }
              }

              .transparent-seeker-layer {
                //please do not delete this layer unless you know what you are doing
                // this code allows the seeker click position to function well
                width: 100%;
                height: 6px;
                background-color: transparent;
                position: absolute;
                cursor: pointer;
                z-index: 5;
              }

              .bar {
                width: 0;
                background-color: #fff;
                height: 4px;
                position: absolute;
              }
            }
          }

          .extra-controls {
            height: 25px;
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            .like {
              padding-left: 8px;
              height: 25px;

              i {
                font-size: 1em;
                line-height: 25px;
              }
            }

            .download {
              padding-left: 8px;
              height: 25px;

              i {
                font-size: 1em;
                line-height: 25px;
              }
            }

            .shuffle-icon {
              padding-left: 8px;
              height: 25px;

              i {
                font-size: 1.2em;
                line-height: 25px;
              }
            }

            .repeat {
              position: relative;
              padding-left: 8px;
              height: 25px;

              .repeat-info {
                background-color: red;
                width: 13px;
                height: 13px;
                border-radius: 8px;
                position: absolute;
                font-size: 7px;
                line-height: 12px;
                text-align: center;
                right: -12px;
                top: 5px;
                color: #fff;
                text-transform: capitalize;
                letter-spacing: 1px;
              }

              i {
                font-size: 1.2em;
                line-height: 25px;
              }
            }

            .playlist-icon {
              margin-left: 30px;
              height: 25px;
              i {
                font-size: 1.2em;
                line-height: 25px;
              }
            }
          }
        }
      }

      .volume {
      }
    }
  }
}

.height-enter-active {
  animation: bounce-in 0.5s;
}

.height-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 75px;
  }
}
</style>
