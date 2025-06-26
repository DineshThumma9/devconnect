

interface Props{
    heading:string
    subtext:string
}
const CredtionalsHeader = ({heading,subtext}:Props)=>{
    return(
        <>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">{heading}</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    {subtext}
                </p>
            </div>
        </>
    )
}

export default CredtionalsHeader;
