import React, { useEffect, useState } from 'react';
import COLORS from './colors';
import Header from './Components/Header';
import Myself from './Components/Myself';
import Post from './Components/Post';
import Stories from './Components/Stories';
import Sugestion from './Components/Sugestion';



import {
  DoubleComponent,
  RightSideContainer,
  LeftSideContainer
} from './styles'

function App() {

  const [leftNum, setLeftNum] = useState<number>()

  useEffect(() => {

    setLeftNum(((window.innerWidth - 935) / 2) + 614 + 28 - .5)
    function handleResize() {
      setLeftNum(((window.innerWidth - 935) / 2) + 614 + 28 - .5)
    }
    window.addEventListener('resize', handleResize)
  })


  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Header />

      {/** DOIS COMPONENTS */}
      <DoubleComponent>
        {/** LEFT-SIDE */}
        <LeftSideContainer>
          <Stories />
          <div
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            <Post 
              user={{name: 'doggo', photo: 'https://i.imgur.com/8Zwsyok.jpeg'}}
              likedNum={402}
              description={'Imma doggo 😍'}
              comments={139}
              hour={4}
              photo='https://i.imgur.com/8Zwsyok.jpeg'
            />

            <Post 
              user={{name: 'notacorgi', photo: 'https://i.imgur.com/PStkpu8.jpeg'}}
              likedNum={632}
              description={'Imma corgii 😎'}
              comments={243}
              hour={6}
              photo='https://i.imgur.com/PStkpu8.jpeg'
            />

            <Post 
              user={{name: 'dubdi', photo: 'https://i.imgur.com/PStkpu8.jpeg'}}
              likedNum={452}
              description={'Hahaha lmao 😜🎂 happy birthday '}
              comments={158}
              hour={7}
              photo='https://i.imgur.com/H981AN7.jpeg'
            />

          </div>
        </LeftSideContainer>
        {/** RIGHT-SIDE */}
        <RightSideContainer
          style={{

            left: leftNum
          }}
        >
          <Myself />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 23,
              width: '100%',
              marginBottom: 12
            }}
          >
            <text
              style={{
                color: '#8e8e8e',
                textAlign: 'left',
                lineHeight: '18px',
                fontSize: 14,
                fontWeight: 600,
              }}
            >Sugestões para você</text>
            <text
              style={{
                color: '#262626',
                textAlign: 'left',
                lineHeight: '18px',
                fontSize: 12,
                fontWeight: 600,
              }}>Ver tudo</text>
          </div>

          <Sugestion 
            user={'usuario123'}
            photo={'https://i.imgur.com/DZXCcR6.png'}
          />
          <Sugestion 
            user={'usuario123'}
            photo={'https://i.imgur.com/DZXCcR6.png'}
          />
          <Sugestion 
            user={'usuario123'}
            photo={'https://i.imgur.com/DZXCcR6.png'}
          />
          <Sugestion 
            user={'usuario123'}
            photo={'https://i.imgur.com/DZXCcR6.png'}
          />
          <Sugestion 
            user={'usuario123'}
            photo={'https://i.imgur.com/DZXCcR6.png'}
          />

        </RightSideContainer>
      </DoubleComponent>

    </div>
  );
}

export default App;
