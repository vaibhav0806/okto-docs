import { Button } from "@nextui-org/react"
import { FaPlus } from "react-icons/fa6";

export default function Showcase() {
    return (
        <div className="flex justify-between mx-16 mt-20">
            <div className="text-6xl font-bold">
                Cool Apps <br/>
                Made with Okto
            </div>
            <Button radius="full" startContent={<FaPlus/>} variant="bordered">
                Submit your app
            </Button>
        </div>
    )
}