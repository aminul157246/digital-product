import connect from '@/app/utils/db';
import {NextResponse} from 'next/server';
// import Post from '@/model/Posts';


 
export const GET = async (req) => {

    try {

        await connect()
        // const posts = await Post.find()
        // return new NextResponse(JSON.stringify(posts) , {status : 200})

        return  new NextResponse("it's work !!!" , {status : 200})
        
    } catch (error) {
        return new NextResponse("it not work !!!" , {status : 500})
        
    }


}


