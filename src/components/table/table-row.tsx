import { ComponentProps } from "react";

interface TableRowlProps extends ComponentProps<'tr'>{}

export function TableRow(props: TableRowlProps){
    
    return(
        <tr className="className='border-b border-white/10 hover:bg-white/5" {...props} />
    )
}