// 用于管理各种请求接口地址
import Network from './network'

export const getBanner = ()=>Network.get('banner?type=2')
export const getPersonalized = ()=>Network.get('personalized?limit=6')
export const getAlbums = ()=>Network.get('album/newest')
export const getNewSong = ()=>Network.get('personalized/newsong')