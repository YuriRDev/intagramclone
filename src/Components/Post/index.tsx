import React, { useState } from 'react';

// import { Container } from './styles';

import treedots from '../../Assets/treedots.svg'
import heart from '../../Assets/heart.svg'
import heartliked from '../../Assets/heartliked.svg'
import comment from '../../Assets/comment.svg'
import send from '../../Assets/send.svg'
import save from '../../Assets/save.svg'
import savetrue from '../../Assets/savetrue.svg'
import smile from '../../Assets/smile.svg'

import Lottie from 'react-lottie';
import Heart from '../../Assets/Animation/heart';

import {
    ImageContainer,
    ButtonsImg
} from './styles'


interface PostInterface {
    user: any;
    likedNum: number;
    description: string;
    comments: number;
    hour: number;
    photo: string;
}



const Post: React.FC<PostInterface> = ({user, likedNum, description, comments, hour, photo}) => {
    const [isLiked, setIsLiked] = useState(false)
    const [animStarting, setAnimStarting] = useState(false)
    const [isSaved, setIsSaved] = useState(false)


    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: Heart,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }


    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                flexDirection: 'column',
                backgroundColor: '#fff',
                border: '1px solid #dbdbdb',
                borderRadius: 3,
                marginBottom: 26,
                userSelect: 'none'
            }}

        >
            {/** HEADER */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    width: '100%'
                }}
            >

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    <div
                        style={{
                            height: 42,
                            width: 42,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 100,
                            // border: 'solid 2px #CB2D8B',
                            backgroundColor: '#fff',
                            marginRight: 8
                        }}
                    >
                        <img
                            src={user.photo}
                            style={{
                                height: 32,
                                width: 32,
                                borderRadius: 100,
                                objectFit: 'cover'
                            }}
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                    <text
                        style={{
                            fontSize: 14,
                            color: '#262626',
                            fontWeight: 600,
                            lineHeight: '18px'

                        }}
                    >{user.name}</text>
                </div>

                <img
                    src={treedots}
                    style={{
                        height: 24,
                        width: 24,
                        cursor: 'pointer',
                        position: 'relative'
                    }}
                    onDragStart={(e) => e.preventDefault()}
                />
            </div>

            {/** POST */}
            <ImageContainer
                onDoubleClick={() => {
                    setIsLiked(true)
                    if (!animStarting) {
                        setAnimStarting(true)
                        setTimeout(() => {
                            setAnimStarting(false)
                        }, 1300)
                    }
                }}
                style={{
                    backgroundImage: `url(${photo})`,
                    backgroundSize: 'cover',
                }}
                onDragStart={(e) => e.preventDefault()}
            >
                {animStarting && (
                    <Lottie
                        options={defaultOptions}
                        height={110}
                        isClickToPauseDisabled
                        style={{
                            opacity: .85
                        }}

                    />
                )}
            </ImageContainer>
            {/** Buttons */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 54,
                    padding: 16,
                    width: '100%'

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >

                    <ButtonsImg
                        src={isLiked ? heartliked : heart}
                        onClick={() => {
                            setIsLiked(!isLiked)
                        }}
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <ButtonsImg
                        src={comment}
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <ButtonsImg
                        src={send}
                        style={{
                            marginRight: 0,
                        }}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
                <ButtonsImg
                    onClick={() => {
                        setIsSaved(!isSaved)
                    }}
                    src={isSaved ? savetrue : save}
                    onDragStart={(e) => e.preventDefault()}
                />
            </div>

            {/**CURTIDAS */}
            <text
                style={{
                    width: '100%',
                    textAlign: 'left',
                    lineHeight: '18px',
                    fontSize: 14,
                    fontWeight: 600,
                    paddingLeft: 16
                }}
            >{likedNum + (isLiked ? 1 : 0)} curtidas</text>

            {/** DESCRICAO */}
            <div
                style={{
                    width: '100%',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}
            >
                <text
                    style={{
                        textAlign: 'left',
                        lineHeight: '18px',
                        fontSize: 14,
                        fontWeight: 600,
                        marginRight: 4
                    }}
                >{user.name}</text>
                <text
                    style={{
                        textAlign: 'left',
                        lineHeight: '18px',
                        fontSize: 14,
                        marginRight: 4
                    }}
                >
                    {description}
                </text>
            </div>

            {/** COMENTARIO INFO     */}
            <text
                style={{
                    color: '#8e8e8e',
                    textAlign: 'left',
                    lineHeight: '18px',
                    fontSize: 14,
                    width: '100%',
                    paddingLeft: 16,
                    fontWeight: 400,
                    marginTop: -4
                }}
            >Ver todos os {comments} comentarios</text>

            {/** TIME */}
            <text
                style={{
                    color: '#8e8e8e',
                    textAlign: 'left',
                    lineHeight: '18px',
                    fontSize: 10,
                    width: '100%',
                    paddingLeft: 16,
                    fontWeight: 400,
                    marginTop: 4,
                    letterSpacing: .2
                }}
            >HA {hour} HORAS</text>

            {/** ENVIAR COMENTARIO */}
            <div
                style={{
                    width: '100%',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderTop: '1px solid #dbdbdb',
                    marginTop: 16

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    <img
                        src={smile}
                        style={{
                            height: 24,
                            width: 24,
                            cursor: 'pointer',
                            marginRight: 16,
                        }}
                        onDragStart={(e) => e.preventDefault()}
                    />
                    <text
                        style={{
                            color: '#8e8e8e',
                            textAlign: 'left',
                            lineHeight: '18px',
                            fontSize: 14,
                            width: '100%',
                            fontWeight: 400,
                        }}
                    >Adicione um comentario...</text>
                </div>

                <text
                    style={{
                        color: '#0095f6',
                        textAlign: 'left',
                        lineHeight: '18px',
                        fontSize: 14,
                        fontWeight: 600,
                        opacity: .4
                    }}
                >Publicar</text>

            </div>

        </div>
    );
}

export default Post;