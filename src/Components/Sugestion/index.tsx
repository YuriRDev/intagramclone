import React from 'react';

// import { Container } from './styles';

interface SugestionInterface {
    photo: string;
    user: string;
}

const Sugestion: React.FC<SugestionInterface> = ({ photo, user }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}
            >

                <img
                    src={photo}
                    style={{
                        height: 32,
                        width: 32,
                        marginRight: 12,
                        borderRadius: 100,
                        marginLeft: 5,
                        objectFit: 'cover',
                        border: '1px solid #dbdbdb',

                    }}
                    onDragStart={(e) => e.preventDefault()}
                />

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
                            fontWeight: 600,
                        }}
                    >{user}</text>
                    <text
                        style={{
                            color: '#8e8e8e',
                            textAlign: 'left',
                            lineHeight: '18px',
                            fontSize: 12,
                        }}
                    >Segue você</text>
                </div>
            </div>

            <text
                style={{
                    color: '#0095f6',
                    textAlign: 'left',
                    lineHeight: '18px',
                    fontSize: 12,
                    fontWeight: 600
                }}
            >Seguir</text>
        </div>
    );
}

export default Sugestion;