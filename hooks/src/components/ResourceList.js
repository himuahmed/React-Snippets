import useResources from './useResources';


const ResourceList = (props) =>{

    const resources = useResources(props.resource);

    return(
        <div>
           <ul>{resources.map(item => <li key={item.id}>{item.title}</li>)}</ul>
        </div>
    );
    
}

export default ResourceList;
