import axios from "axios"; 
import aws4 from "aws4"
import { aws4Interceptor } from "aws4-axios";
const BASE_URL = process.env.BASE_URL;
const POSTFIX = process.env.POSTFIX;
const RESOUCE = "notes"

const url = BASE_URL + POSTFIX + RESOUCE;
let awsCred = localStorage.getItem("aws_cred");
if(awsCred) {
    awsCred = JSON.parse(awsCred);
    let userName = localStorage.getItem("userName");
    const { AccessKeyId , SecretKey , SessionToken } = awsCred;
    const awsInterceptor = aws4Interceptor(
        {
          region: "us-east-1",
          service: "execute-api",
        },
        {
          accessKeyId: AccessKeyId,
          secretAccessKey: SecretKey,
          sessionToken: SessionToken
        }
      );

      axios.interceptors.request.use(awsInterceptor)

      axios.interceptors.request.use(request => {
        request.headers["app_user_id"] = awsCred.IdentityId
        request.headers["app_user_name"] = userName
      });
       
      return request;
}

export const getNotes = async () => {
    try {
        const { data } = await axios.get(url);
        return data.notes
    } catch (error) {
        localStorage.setItem("error", JSON.stringify(error))
    }
}

export const getNote = async (noteId) => {
    try {
        const { data } = await axios.get(url + `/${noteId}`);
        return data.note
    } catch (error) {
        localStorage.setItem("error", JSON.stringify(error))
    }
}

export const addNote = async (note) => {
    try {
        const { data } = await axios.post(url, note);
        return data.note
    } catch (error) {
        localStorage.setItem("error", JSON.stringify(error))
    }
}

export const updateNote = async (note) => {
    try {
        const { data } = await axios.patch(url + `/${note.noteId}`, note);
        return data.note
    } catch (error) {
        localStorage.setItem("error", JSON.stringify(error))
    }
}

export const deleteNote = async (noteId) => {
    try {
        const { data } = await axios.delete(url + `/${noteId}`);
        return data
    } catch (error) {
        localStorage.setItem("error", JSON.stringify(error))
    }
}

export const singApi = () => {
    const signer = aws4.RequestSigner({

    })
}
