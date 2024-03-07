import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserForm() {
        return (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Criar usuário</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogDescription>
                    Adicione um novo usuário ao seu sistema
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nome 
                    </Label>
                    <Input id="name" value="Joana Duarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">criar usuário</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )
}