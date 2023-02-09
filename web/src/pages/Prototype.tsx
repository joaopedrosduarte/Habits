import { Background } from "../components/Background";
import { TaskList } from '../components/TaskList';
import * as Tabs from '@radix-ui/react-tabs';
import { TaskTypeTwo } from '../components/TaskTypeTwo';

export function Prototype(){
    
    return (
        <div className="flex w-full h-full justify-center items-center">
            <Background/>
            <div className="absolute flex gap-4">
            </div>
        </div>
    )
}