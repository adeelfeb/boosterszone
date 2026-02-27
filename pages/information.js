export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/about-us',
      permanent: true,
    },
  }
}

export default function InformationPage() {
  return null
}
