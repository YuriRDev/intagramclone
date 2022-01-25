import React from 'react';
import COLORS from '../../colors';


import logo from '../../Assets/logo.png'

import home from '../../Assets/home.svg'
import message from '../../Assets/message.svg'
import post from '../../Assets/post.svg'
import bussula from '../../Assets/bussula.svg'
import heart from '../../Assets/heart.svg'
import search from '../../Assets/search.svg'

import {
    HeaderContainer,
    SearchBar,
    IconsImg,
    PhotoImg
} from './styles';


const Header: React.FC = () => {
    const fotoUlr = 'https://i.imgur.com/QCh9NeE.jpeg'

    return (
        <div
            style={{
                backgroundColor: '#fff',
                height: 60,
                width: '100%',
                borderBottom: '1px solid #dbdbdb',
                alignItems: 'center',
                WebkitAlignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                marginBottom: 30,
                position: 'fixed',
                top: 0,
                zIndex: 100
            }}
        >
            <HeaderContainer>
                <img
                    src={logo}
                    onDragStart={e => e.preventDefault()}
                    style={{
                        height: 29,
                        width: 103,
                        objectFit: 'contain',
                    }}
                />


                <SearchBar>
                    <img
                        src={search}
                        onDragStart={e => e.preventDefault()}
                        style={{
                            height: 16,
                            width: 16,
                            marginRight: 12
                        }} />

                    <text
                        style={{
                            color: '#8e8e8e',
                            textAlign: 'left',
                            lineHeight: '25px',
                            fontSize: 16,
                            width: '100%',
                            fontWeight: 300
                        }}
                    >Pesquisar</text>
                </SearchBar>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',

                    }}
                >
                    <IconsImg
                        src={home}
                        style={{
                            marginLeft: 22
                        }}
                        onDragStart={e => e.preventDefault()}
                    />
                    <IconsImg
                        src={message}
                        onDragStart={e => e.preventDefault()}
                    />
                    <IconsImg
                        src={post}
                        onDragStart={e => e.preventDefault()}
                    />
                    <IconsImg
                        src={bussula}
                        onDragStart={e => e.preventDefault()}
                    />
                    <IconsImg
                        src={heart}
                        onDragStart={e => e.preventDefault()}
                    />
                    <PhotoImg
                        src={fotoUlr}
                        onDragStart={e => e.preventDefault()}
                    />

                </div>

            </HeaderContainer>

        </div>
    );
}

export default Header;