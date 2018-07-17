import { Material } from '../components/material';

const MaterialContainer = ({ props }) => <div>
    <Material {...props} />
</div>

MaterialContainer.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
    return {props: {
        reduxdata: 'need data here'
    }}
}
export default MaterialContainer
