import React from 'react';

// import { Container } from './styles';

const Myself: React.FC = () => {

    const fotoUlr = 'https://i.imgur.com/QCh9NeE.jpeg'
    const user = 'joshuadoggo'
    const description = 'Pong 🐶'

    return (
        <div
            style={{
                height: 56,
                marginTop: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            {/** Photo + Name */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <img
                    src={fotoUlr}
                    style={{
                        height: 56,
                        width: 56,
                        borderRadius: 1000,
                        marginRight: 18,
                        objectFit: 'cover'
                    }}
                    onDragStart={(e) => e.preventDefault()}
                />
                {/** INFOS */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <text
                        style={{
                            color: '#262626',
                            textAlign: 'left',
                            lineHeight: '18px',
                            fontSize: 14,
                            width: '100%',
                            fontWeight: 600,
                        }}
                    >{user}</text>
                    <text
                        style={{
                            color: '#8e8e8e',
                            textAlign: 'left',
                            lineHeight: '18px',
                            fontSize: 14,
                            fontWeight: 400,
                            marginTop: 1
                        }}
                    >{description}</text>
                </div>


            </div>

            <text
                style={{
                    color: '#0095f6',
                    textAlign: 'left',
                    lineHeight: '18px',
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 1
                }}
            >Mudar</text>
        </div>
    );
}

export default Myself;