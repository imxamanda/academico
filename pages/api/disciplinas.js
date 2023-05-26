import { db } from "@/services/firebase"
import { ref } from "firebase/database"


export default function handler(req, res) {

   set(ref(db, 'disciplinas'), req.body)

    ///res.status(200).json({ name: 'John Doe' })
  }