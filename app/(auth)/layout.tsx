//center the sign in/sign up box
//instead of change it indiviually in each page.tsx
//create a layout.txs in auth

const AuthLayout = ({
   children 
}: {
    children: React.ReactNode;
}) => {
    return(
        <div className ="flex items-center justify-center h-full">
            {children}
        </div>

    );
}

export default AuthLayout;