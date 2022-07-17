<template lang="pug">
.main-page 
    .side-bar 
        h2 PROJECTUS
        .profile
            .profile-persons
                h3 Jean Gonzales
                p Product Owner
        .tasks
            .completed
                h4 372
                p Completed Tasks
            .open 
                h4 11
                p Open Tasks
        .menu
            h3 MENU 
            p Home
            p My Tasks
            p Notifications
    .content-project
        .header-content
            h1 Website Redesign
        .content
</template>

<style lang="scss">
@import "../assets/style/fonts/fonts.scss";
@import "../assets/style/helpers/reset.scss";
.main-page {
  display: flex;
  width: 100%;
  height: 100%;

  .side-bar {
    width: 270px;
    height: 100%;
    background-color: black;

    h2 {
      position: relative;
      font-family: Helvetica;
      font-size: 16px;
      color: #ffffff;
      line-height: 24px;
      margin: 30px 72px;

      &::after {
        position: absolute;
        content: "";
        background-image: url("../assets/Logo.svg");
        cursor: pointer;
        width: 22px;
        height: 19px;
        left: -35px;
      }
      &::before {
        position: absolute;
        content: "";
        background-image: url("../assets/Search.svg");
        cursor: pointer;
        width: 16px;
        height: 16px;
        left: 160px;
      }
    }
    .profile {
      padding: 20px 0px 0px 93px;
      height: 60px;
      background-color: #202020;

      .profile-persons {
        position: relative;
        h3 {
          width: 94px;
          font-family: Helvetica;
          font-size: 14px;
          color: #ffffff;
        }
        p {
          margin-top: 8px;
          font-family: Helvetica;
          font-size: 12px;
          color: #9b9b9b;
        }

        &::after {
          position: absolute;
          content: "";
          background-image: url("../assets/face.jpg");
          background-size: cover;
          background-position: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          left: -63px;
          top: -5px;
        }
        &::before {
          position: absolute;
          content: "";
          cursor: pointer;
          background-image: url("../assets/dots.svg");
          background-size: cover;
          background-position: center;
          width: 22px;
          height: 22px;
          left: 138px;
          top: 8px;
        }
      }
    }
    .tasks {
      width: 100%;
      height: 90px;
      display: flex;

      .completed {
        margin: 20px 0px 0px 30px;
        h4 {
          font-family: Helvetica;
          font-size: 20px;
          color: #ffffff;
        }
        p {
          margin-top: 4px;
          opacity: 0.5;
          font-family: Helvetica;
          font-size: 12px;
          color: #ffffff;
        }
      }
      .open {
        margin: 20px 0px 0px 20px;
        h4 {
          font-family: Helvetica;
          font-size: 20px;
          color: #ffffff;
        }
        p {
          margin-top: 4px;
          opacity: 0.5;
          font-family: Helvetica;
          font-size: 12px;
          color: #ffffff;
        }
      }
    }
    .menu {
      width: 100%;
      height: 246px;
      padding-left: 33px;
      padding-top: 7px;

      h3 {
        font-family: Helvetica;
        font-size: 12px;
        color: #878787;
        line-height: 18px;
        padding-bottom: 7px;
      }

      p {
        margin-top: 15px;
        font-family: Helvetica;
        font-size: 14px;
        color: #ffffff;
        line-height: 22px;
      }
    }
  }
  .header-content {
    width: 100%;
    height: 136px;
    background-color: #ffffff;

    h1 {
      font-family: Helvetica;
      font-size: 32px;
      color: #131313;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 136px);
    background-color: rgb(173, 170, 162);
  }
}
</style>
