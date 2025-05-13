import { Badge } from "@/components/ui/badge";
import { Nextjslogo } from "./icons/Nextjslogo";
import { Reactlogo } from "./icons/Reactlogo";
import { Tailwindcsslogo } from "./icons/Tailwindcsslogo";
import { Nodejslogo } from "./icons/Nodejslogo";
import { Card } from "@/components/ui/card";

export default function Skills (){
//importer svg nextjs tailwind Node js
    return(
        <section className="flex flex-col justify-center max-w-3xl px-4 m-auto gap-4">
            <Badge variant={"outline"} className="m-auto text-xl border-4 text-primary">Skills</Badge>
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight m-auto first:mt-0">
                J&apos;adore travailler avec ...
            </h2>
                <div className="flex flex-col justify-center md:flex-row gap-4"> 
                  <Card className="p-4 flex flex-col items-center justify-center text-center flex-1">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col items-center justify-center m-auto md:flex-row">
                        <div className="p-6 flex flex-col items-center">
                          <Reactlogo 
                              size={40}
                              className="animate-spin"
                              style={{animationDuration: "10s"}}
                          /> 
                          <h3 className="mb-2 mt-2 text-2xl font-semibold tracking-tight">
                            React
                          </h3>
                        </div>  
                        <p className="font-bold text-xl p-2">+</p>
                        <div className="flex flex-col items-center p-6">
                          <Nextjslogo 
                          size={40}
                          />
                          <h3 className="mb-2 mt-2 text-2xl font-semibold tracking-tight">
                            Next Js
                          </h3>
                        </div>
                      </div>
                      <p className="text-m text-muted-foreground">
                        Mon premier Framework Javascript est React, je trouve la façon de coder en composant cool entre autre.
                      </p>
                    </div>
                  </Card>
                  
                  {/* ajouter des separateur horizontale ou vertical celon la taille de l'ecran */}
                  <Card className="p-4 flex flex-col items-center justify-center text-center flex-1">
                    <div className="flex flex-col gap-4 items-center">
                      <Tailwindcsslogo 
                        size={40}
                      />
                      <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                        TailwindCss
                      </h3>
                      <p className="text-m text-muted-foreground">
                          Mon premier Framework css est <span>TailwindCss</span> je le trouve pratique pour coder rapidement et vraiment intéressant , on peut toujours utiliser le CSS pour des besoins plus complexes selon les besoins du projet.
                      </p>  
                    </div>
                  </Card>

                  <Card className="p-4 flex flex-col items-center justify-center text-center flex-1">
                    <div className="flex flex-col items-center gap-4">
                      <Nodejslogo 
                          size={40}
                      />
                      <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                          Node Js
                      </h3>
                      <p className="text-m text-center text-muted-foreground">
                        Mon premier langage Back-end de formation. C&apos;est le langage back-end avec lequel je suis le plus à l&apos;aise actuellement.
                      </p>
                    </div>
                  </Card>
              </div>
        </section>
    )
}