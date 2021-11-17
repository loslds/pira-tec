import styled from 'styled-components'

export const Container = styled.nav`
  background: linear-gradient(150deg, #838383, 35%, #f9fafc);
  font-style: bold;
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 11px;
  }
`

export const DropdownStyles = styled.div`
  .dropdown-option {
    padding: 10px 15px;
    outline: 0;
    color: #000000;
    font-size: 18px;
    transition: 0.25s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }

  .dropdown-root {
    z-index: 100;
    position: absolute;
  }

  .dropdown-arrow {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: rgb(206, 224, 246);
      top: -8.5px;
      left: -8px;
      border-top: 2px red solid;
      border-left: 2px red solid;
      border-radius: 4px 0 0 0;
      transform: rotate(45deg);
    }
  }

  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 20px 100px -20px rgb(73, 130, 177),
      0 20px 60px -30px rgba(0, 0, 0, 0.5),
      0 -10px 60px -10px rgba(0, 0, 0, 0.1);
    background: #cee0f3;
    border: 2px red solid;
    border-radius: 4px;
  }

  .dropdown-section {
    position: absolute;
  }

  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #8ba4be;
    width: 100%;
  }
`
