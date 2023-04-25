import { checkToken } from "../utilities/users-service"

export default function OrderHistoryPage()
{
    const handleCheckToken = async () =>
    {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <div>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>
                Check When My Login Token Expries
            </button>
        </div>
    )
}
