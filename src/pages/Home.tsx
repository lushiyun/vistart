import type { FunctionComponent } from "@/common/types";
import Button from "@/components/ui/button";

const Home = (): FunctionComponent => {
	return (
		<div className="flex  h-screen w-screen flex-col items-center justify-center bg-blue-300 font-bold ">
			<p className="text-6xl text-white">Hello, world!</p>
			<Button>Click me</Button>
		</div>
	);
};

export default Home;
