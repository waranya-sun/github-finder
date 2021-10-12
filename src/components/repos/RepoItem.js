import React from "react";

const RepoItem = ({repo}) => {
    return (
        <div className="repoItemComp borderLight">
            <h3><a target="_blank" href={repo.html_url}>{repo.name}</a></h3>
        </div>
    )
}

export default RepoItem;