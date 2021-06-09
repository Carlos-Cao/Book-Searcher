# Book Searcher &middot; [![Build Status](https://dev.azure.com/booksearcher/BookSearcher/_apis/build/status/Carlos-Cao.Phase1-Web-App?branchName=master)](https://dev.azure.com/booksearcher/BookSearcher/_build/latest?definitionId=2&branchName=master)

<p>Book Searcher uses Google Books' API to aggregate book titles based on search terms, to get the book image, title, authors, date published, published by and description, with up to 30 results available.</p>

<b>URL to the deployed website: </b>https://booksearcher.azurewebsites.net/

<h2>Technologies</h2>

<p>Built with TypeScript and React.</p>
<p>Fetches data from Google books public API.</p>

<b>Note:</b> No API key is needed.

<h2> Dev-Ops Pipelines </h2>

<ul>
<li> I started my project using Microsoft's Azure portal to create a domain to deploy my web app with a URL.  </li>
<li> I created a build pipeline with Azure DevOps to configure my pipeline using a YAML file which makes changes to the pipeline to build and deploy the react app. </li>
<li> I used Azure DevOps to set up the release pipelines for continuous deployment to the production server through my GitHub Repository. By running the azure-pipelines.yml script for every change committed and pushed to the master or develop branch, the script automatically updates and deploys the latest changes to the live server.</li>
</ul>
