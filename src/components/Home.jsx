import Lottie from "lottie-react";
import Look from '../animations/look.json';
function Home(){
    return(
        <div className="grid grid-cols-2 mt-4 items-center justify-center">
            <Lottie animationData={Look} />
            <div>
            <h1 className="text-7xl text-zinc-100 font-primary">BatMAN</h1>
            <p className="text-3xl mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, doloribus! Inventore excepturi, repellat odit tempore delectus, earum voluptas alias voluptatem esse officia, aspernatur odio doloribus! Nobis obcaecati eius error, assumenda commodi ea vero accusamus eos quis dicta consequatur tempore ab?</p>
            </div>
        </div>
    )
}
export default Home;
