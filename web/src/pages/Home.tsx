import { Background } from "../components/Background";
import { TaskList } from '../components/TaskList';
import * as Tabs from '@radix-ui/react-tabs';
import { User } from "../components/User";
import { Map } from "../components/Map";

export function Home(){

    return (
        <div className="flex w-full h-full justify-center">
            <Background type="h-60"/>
            <div className="flex flex-1 relative w-[640px] h-auto top-32 pb-16 justify-center">
                <Tabs.Root className="flex bg-white rounded-lg border shadow-md pb-3 w-[640px] h-auto flex-col" defaultValue="tab2">
                    <Tabs.List className="flex justify-between" aria-label="Manage your account">
                        <Tabs.Trigger className="border-b-2 border-zinc-200 data-[state=active]:border-b-primary flex-1 p-4 rounded-tl-lg data-[state=active]:text-primary font-semibold transition-colors" value="tab1">
                            Account
                        </Tabs.Trigger>
                        <Tabs.Trigger className="border-b-2 border-zinc-200 data-[state=active]:border-b-primary flex-1 p-4 data-[state=active]:text-primary font-semibold transition-colors" value="tab2">
                            Home
                        </Tabs.Trigger>
                        <Tabs.Trigger className="border-b-2 border-zinc-200 data-[state=active]:border-b-primary flex-1 p-4 rounded-tr-lg data-[state=active]:text-primary font-semibold transition-colors" value="tab3">
                            Map
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content  value="tab1">
                        <User />
                    </Tabs.Content>
                    <Tabs.Content className="flex w-full h-full justify-center" value="tab2">
                        <TaskList/>
                    </Tabs.Content>
                    <Tabs.Content  value="tab3">
                        <Map />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    )
}