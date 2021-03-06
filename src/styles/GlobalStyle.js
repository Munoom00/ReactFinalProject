import {createGlobalStyle} from 'styled-components';

const GlobalStyled = createGlobalStyle`
// :root{
//     --primary-color: #007bff;
//     --primary-color-light: #057FFF;
//     --secondary-color: #6c757d;
//     --background-dark-color: #10121A;
//     --background-dark-grey: #191D2B;
//     --border-color: #2e344e;
//     --background-light-color: #F1F1F1;
//     --background-light-color-2: rgba(3,127,255,.3);
//     --white-color: #FFF;
//     --font-light-color: #a4acc4;
//     --font-dark-color: #313131;
//     --font-dark-color-2: #151515;
//     --sidebar-dark-color: #191D2B;
//     --scrollbar-bg-color: #383838;
//     --scrollbar-thump-color: #6b6b6b;
//     --scrollbar-track-color: #383838;

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --table-header-color: #007bff;
    --table-body-color: #fbbbcb; 
    --progress-background: #fbbbcb;
}
.dark-theme{
    --primary-color: #3a3b3c;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: black;
    --background-dark-grey: #191D2B;
    --border-color: #b0b3b8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: #3a3b3c;
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #242526;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --table-header-color: #212121;
    --table-body-color: #616161;
    --progress-background: gray;
}

}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
    font-family: 'ZCOOL QingKe HuangYou', cursive;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}

h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
    }
}

span{
    color: #007bff;
}

.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
  

`;

export default GlobalStyled;