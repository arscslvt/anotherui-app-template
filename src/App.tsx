import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { AccordionHeader } from "@radix-ui/react-accordion";
import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/Accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/AlertDialog";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="md:h-screen w-screen md:overflow-y-auto text-slate-900">
      <div className="flex flex-col items-center p-4 pb-10 md:p-10">
        <div className="py-12 flex items-center">
          <h1 className="flex items-center gap-2 text-3xl font-medium select-none">
            Another{" "}
            <span className="p-1 w-7 h-7 bg-slate-900 text-white flex justify-center items-center rounded-lg font-normal text-sm">
              UI
            </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 h-max flex-1">
          <div className="flex flex-col gap-10 h-max">
            <Tile
              title="Buttons"
              description="Custom buttons made by me."
              options={["3 variants", "Customizable"]}
            >
              <div className="flex items-center gap-4">
                <Button>Filled</Button>
                <Button variant={"outline"}>Outline</Button>
                <Button variant={"transparent"}>Transparent</Button>
              </div>
            </Tile>
            <Tile
              title="Alert Dialog"
              description="A modal dialog that interrupts the user with important content and expects a response."
            >
              <div className="flex justify-center">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button className="!bg-slate-900 !text-white !ring-0 flex items-center gap-2">
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 " />
                      Open Dialog
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle>How it works?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Praesentium neque sequi assumenda amet dolore dolorum
                      aliquid aut rerum. Illo beatae et nostrum at magni eius
                      eveniet ipsa iure quasi odit.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Dismiss</AlertDialogCancel>
                      <AlertDialogAction onClick={() => alert("You clicked!")}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </Tile>
          </div>
          <div className="flex flex-col gap-10 h-max">
            <Tile
              title="Accordion"
              description="A vertically stacked set of interactive headings that each reveal an associated section of content."
              options={["Animated by default", "Customizable"]}
            >
              <div className="flex flex-col items-center gap-4 w-full">
                <Accordion type="multiple" className="max-w-full w-full">
                  <AccordionItem value="1">
                    <AccordionTrigger>Item 1</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium dicta adipisci eligendi voluptates aspernatur
                      voluptas eius itaque. Repudiandae alias reiciendis esse
                      unde blanditiis, labore iste! Iure a nisi earum sit!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="2">
                    <AccordionTrigger>Item 2</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Exercitationem, consectetur quidem. Tempora modi doloribus
                      atque accusantium facilis illum maiores unde aut hic, et
                      ullam praesentium vel, esse itaque consequuntur labore!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="3">
                    <AccordionTrigger>Item 3</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, sequi? Dolorem, quaerat in illo error
                      molestiae sint placeat suscipit ullam vel, doloremque
                      ipsam perspiciatis impedit. Repellendus perspiciatis porro
                      consectetur aperiam?
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Tile>
          </div>
        </div>
      </div>
    </div>
  );
}

const Tile: React.FC<{
  title: string;
  description: string;
  options?: string[];
  children?: ReactNode;
}> = ({ title, description, children, options }) => {
  return (
    <div
      className={`w-full flex-1 h-max flex flex-col items-start rounded-lg ring-2 ring-slate-200 px-4 py-3 max-w-lg`}
    >
      <div>
        <h1 className="font-medium">{title}</h1>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      {options ? (
        <ul className="text-sm flex flex-col gap-1 text-slate-500 mt-2">
          {options?.map((o, i) => {
            return (
              <li className="list-disc ml-4" key={i}>
                {o}
              </li>
            );
          })}
        </ul>
      ) : null}
      <div className="mt-4 w-full">
        <div>
          <h4 className="text-sm font-medium text-slate-900">
            Interactive preview
          </h4>
        </div>
        <div className="mt-2 p-4 rounded-lg border border-slate-200 shadow-sm w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
