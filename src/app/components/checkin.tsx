// checkin.jsx
import React from 'react';
import { Calendar} from "lucide-react";
function checkin({count,setCount,}: {count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;})
{
  
    return(

        <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">
              Ready to start your day?
            </h3>
            <p className="opacity-90">
              Complete your daily check-in to maintain your streak!
            </p>
          </div>
          <button className="text-1xl font-bold flex items-center gap-3 px-5 py-4 rounded-lg bg-green-600 hover:bg-green-700 transition"
                            onClick={()=>setCount(count+1)}>
    <Calendar size={25} className="text-green-200" /> Check in
</button>
        </div>
  </div>      
 
    )
}
export default checkin;