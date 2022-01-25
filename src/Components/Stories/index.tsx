import React from 'react';

// import { Container } from './styles';

const Stories: React.FC = () => {
    const stories = [
        {
            name: "doggo",
            photo: "https://i.imgur.com/8Zwsyok.jpeg",
            closeFriends: true
        },
        {
            name: "animeman",
            photo: "https://i.imgur.com/E55hW4K.jpeg",
        },
        {
            name: "notacorgi",
            photo: 'https://i.imgur.com/PStkpu8.jpeg',
            closeFriends: true
        },
        {
            name: "horse",
            photo: 'https://i.imgur.com/5BvYLF3.jpeg'
        },
        {
            name: "crab",
            photo: 'https://i.imgur.com/5QnGUBn.jpeg'
        },
        {
            name: "human",
            photo: 'https://i.imgur.com/CK1CZot.jpeg'
        },
        {
            name: "lizard_",
            photo: 'https://i.imgur.com/LRnLadK.jpeg'
        },
    ]

    return (
        <div
            style={{
                height: 118,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: '#fff',
                border: '1px solid #dbdbdb',
                marginBottom: 25,
                padding: '16px 16px',
                borderRadius: 3,
                overflowX: 'auto',
                overflowY: 'hidden',

            }}
            role={'presentation'}
        >
            {stories.map(({ name, photo, closeFriends }) => (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: 112,
                        width: 80,
                        marginRight: 8
                    }}
                >

                    <div
                        style={{
                            height: 66,
                            width: 66,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 100,
                            border: closeFriends ? 'solid 2px #5AC424' : 'solid 2px #CB2D8B',
                            backgroundColor: '#fff',
                            cursor: 'pointer'

                        }}
                    >
                        <img
                            src={photo}
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 100,
                                objectFit: 'cover'
                            }}
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                    <text
                        style={{
                            fontSize: 12,
                            color: '#262626',
                            marginTop: 4
                        }}
                    >{name}</text>
                </div>
            ))}
        </div>
    );
}

export default Stories;