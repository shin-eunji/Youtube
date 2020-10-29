import React from "react";
import {
    AiFillClockCircle, AiFillLike,
    BsCollectionPlayFill,
    CgPlayButtonR, CgPlayList,
    MdHistory,
    MdHome,
    MdLocalMovies,
    MdVideoLibrary, RiAirplayFill,
    RiFireFill
} from "react-icons/all";

export const feedList = [
    {
        icon: <MdHome/>,
        name: '홈',
        to: '/',
        isActive: true,
    },
    {
        icon: <RiFireFill/>,
        name: '인기',
        to: '/feed/trending',
        isActive: false,
    },
    {
        icon: <BsCollectionPlayFill/>,
        name: '구독',
        to: '/feed/subscriptions',
        isActive: false,
    },
    {
        icon: <MdVideoLibrary/>,
        name: '보관함',
        to: '/feed/library',
        isActive: false,
    },
    {
        icon: <MdHistory/>,
        name: '시청 기록',
        to: '/feed/history',
        isActive: false,
    },
    {
        icon: <CgPlayButtonR/>,
        name: '내 동영상',
        to: '/feed/my_videos',
        isActive: false,
    },
    {
        icon: <MdLocalMovies/>,
        name: '내 영화',
        to: '/feed/storefront',
        isActive: false,
    },
    {
        icon: <AiFillClockCircle/>,
        name: '나중에 볼 동영상',
        to: '/playlist',
        isActive: false,
    },
    {
        icon: <AiFillLike/>,
        name: '좋아요 표시한 동영상',
        to: '/playlist',
        isActive: false,
    },
    {
        icon: <RiAirplayFill/>,
        name: '관련 재생목록 -',
        to: '/watch',
        isActive: false,
    },
    {
        icon: <CgPlayList/>,
        name: '즐겨찾기',
        to: '/playlist',
        isActive: false,
    },
]