import axios from "axios";

const baseUrl = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const paramsHeaders = {
    params: {
    bl_latitude: '51.30659995812083',
    tr_latitude: '55.46020003387486',
    bl_longitude: '-10.76660009801868',
    tr_longitude: '-5.66890006746988',
    limit: '30',
    currency: 'USD',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': 'f6452b5ddfmsh2e30878831a9559p12cc76jsn5bb1e4bcd5ac',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
}


export const getPlacesData = async () => {
    try {
        const {data : {data}} = await axios.get(baseUrl, paramsHeaders)

        return data
    } catch(error) {
        return null
    }
}