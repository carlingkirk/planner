import Layout from './layout'
import NestedLayout from './nestedlayout'

export default function Page() {
    return (
        //content
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}