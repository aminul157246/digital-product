// import blogs from '/public/blog.json'
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Image from 'next/image';

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: "no-store",
    })

    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const Blog = async () => {


    const data = await getData()
    console.log(data);
  

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                data.map(blog => <div key={blog.id}>
                    <Link href={`/blog/${blog.id}`}>


                        <Card sx={{ maxWidth: 345 }}>
                            {/* <Image src={blog.img} width={100} height={100} alt=""></Image> */}
                            <CardContent>


                                <Typography gutterBottom variant="h5" component="div">
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {blog.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>




                    </Link>
                </div>)
            }
        </div>
    );
};

export default Blog;