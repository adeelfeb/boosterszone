export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/about',
      permanent: true,
    },
  }
}

export default function InformationPage() {
  return null
}
