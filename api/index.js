import axios from "axios";






export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  console.log("TYPE", type)

  const baseUrl = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`

  const paramsHeaders = {
    params: {
      bl_latitude: bl_lat ? bl_lat : '51.30659995812083',
      tr_latitude: tr_lat ? tr_lat : '55.46020003387486',
      bl_longitude: bl_lng ? bl_lng : '-10.76660009801868',
      tr_longitude: tr_lng ? tr_lng : '-5.66890006746988',
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

  try {
    const { data: { data } } = await axios.get(baseUrl, paramsHeaders)

    return data
  } catch (error) {
    return null
  }
}