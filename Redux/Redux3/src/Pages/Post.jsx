import React ,{useState,useEffect} from 'react'
import { useNavigate ,useParams ,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DBService from '../Appwrite/DBConfig';
import Button from '../Components/Button';
import Container from '../Components/Container/Container';
import parse from 'html-react-parser'
import  appwriteService  from '../Appwrite/DBConfig';


function Post() {

 const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.Auth.userData);
    console.log(userData)
    const isAuthor = post && userData ? post.userID === userData.$id : false;



     useEffect(() => {
        if (slug) {
            DBService.getDocument(slug).then((post) => {
                console.log(post)
                if (post) setPost(post);
                else navigate("/");

                console.log(post)
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        console.log('DELETE POST')
        DBService.deletePost(post.$id).then((status) => {
            console.log(status)
            if (status) {
                DBService.deleteFile(post.featureimage);
                navigate("/");
            }
        });
    };





  return (
  post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                         src={appwriteService.getFilePreviou(post.featureimage)}
                        // src='https://www.google.com/imgres?q=nature%20images&imgurl=https%3A%2F%2Fstatic.sadhguru.org%2Fd%2F46272%2F1633199491-1633199490440.jpg&imgrefurl=https%3A%2F%2Fisha.sadhguru.org%2Fen%2Fwisdom%2Farticle%2Fnatures-temples&docid=5zGd0X02QJ9GSM&tbnid=vlCP_w_plJyr2M&vet=12ahUKEwjo_47Zk6yHAxVAR2wGHZosA5EQM3oFCIUBEAA..i&w=1090&h=613&hcb=2&ved=2ahUKEwjo_47Zk6yHAxVAR2wGHZosA5EQM3oFCIUBEAA'
                        alt={post.title}   
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null
  )
}

export default Post