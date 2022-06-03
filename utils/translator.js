
const translate = (station) => {
    switch(station) {
        case '경복궁' :
            return 'Gyeongbokgung'
        case '쌍문' :
            return 'Ssangmun'
        case '홍대입구' :
            return 'Hongdaeipgu'
        case '합정' :
            return 'Hapjeong'
        case '상수' :
            return 'Sangsu'
        case '수색' :
            return 'Susaek'
        case '가좌' :
            return 'Gajwa'
        case '디지털미디어시티' :
            return 'DMC'
        case '마포' :
            return 'Mapo'
        case '공덕' :
            return 'Gongdeok'
        case '마포구청' :
            return 'Mapogucheong'
        case '창신' :
            return 'Changsin'
        case '종로3가' :
            return 'Jongno3ga'
        case '안국' :
            return 'Anguk'
        case '한성대입구' :
            return 'HansungUniv'
        case '중화' :
            return 'Junghwa'
        case '신촌' :
            return 'Shinchon'
        case '용마산' :
            return 'Yongmasan'
        case '공릉' :
            return 'Gongneung'
        case '이태원' :
            return 'Itaewon'
        case '효창공원앞' :
            return 'Hyochanggongwonap'
        case '회현' :
            return 'Hoehyeon'
        case '한강진' :
            return 'Hangangjin'
        case '용산' :
            return 'Yongsan'
        case '상왕십리' :
            return 'Sangwangsimni'
        case '금호' :
            return 'Geumho'
        case '어린이대공원' :
            return 'ChildrenPark'
        case '구로디지털단지' :
            return 'Gurodigital'
        case '신림' :
            return 'Sillim'
        case '신정네거리' :
            return 'Sinjeongnegeori'
        case '양천구청' :
            return 'Yangcheongucheong'
        case '삼성' :
            return 'Samsung'
        case '뚝섬' :
            return 'Ttukseom'
        case '건대입구' :
            return 'Geondaeipgu'
        case '마곡' :
            return 'Magok'
        case '영등포시장' :
            return 'Yeongdeungpo'
        case '마장' :
            return 'Majang'
        case '송파' :
            return 'Songpa'
        case '석촌' :
            return 'Seokchon'
        case '남위례' :
            return 'Namwirye'
        case '삼성중앙' :
            return 'Samseongjungang'
        case '고속터미널' :
            return 'Gosokterminal'
        case '신사' :
            return 'Sinsa'
        case '까치산' :
            return 'Kkachisan'
        case '발산' :
            return 'Balsan'
        default :
            return '정보없음'
    }
}

module.exports = { translate }