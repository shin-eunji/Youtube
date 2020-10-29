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

export const navRoute = [
    {
        icon: MdHome,
        name: '홈',
        to: '/home',
        isActive: true,
    },
    {
        icon: RiFireFill,
        name: '인기',
        to: '/favorite',
        isActive: false,
    },
    {
        icon: BsCollectionPlayFill,
        name: '구독',
        to: '/subscribe',
        isActive: false,
    },
    {
        icon: MdVideoLibrary,
        name: '보관함',
        to: '/home',
        isActive: false,
    },
    {
        icon: MdHistory,
        name: '시청 기록',
        to: '/home',
        isActive: false,
    },
    {
        icon: CgPlayButtonR,
        name: '내 동영상',
        to: '/home',
        isActive: false,
    },
    {
        icon: MdLocalMovies,
        name: '내 영화',
        to: '/home',
        isActive: false,
    },
    {
        icon: AiFillClockCircle,
        name: '나중에 볼 동영상',
        to: '/home',
        isActive: false,
    },
    {
        icon: AiFillLike,
        name: '좋아요 표시한 동영상',
        to: '/home',
        isActive: false,
    },
    {
        icon: RiAirplayFill,
        name: '관련 재생목록 -',
        to: '/home',
        isActive: false,
    },
    {
        icon: CgPlayList,
        name: '즐겨찾기',
        to: '/home',
        isActive: false,
    },
]