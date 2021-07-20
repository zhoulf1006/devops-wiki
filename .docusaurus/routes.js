
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/devops-wiki/',
  component: ComponentCreator('/devops-wiki/','a74'),
  exact: true,
},
{
  path: '/devops-wiki/blog',
  component: ComponentCreator('/devops-wiki/blog','73a'),
  exact: true,
},
{
  path: '/devops-wiki/blog/hello-world',
  component: ComponentCreator('/devops-wiki/blog/hello-world','828'),
  exact: true,
},
{
  path: '/devops-wiki/blog/hola',
  component: ComponentCreator('/devops-wiki/blog/hola','c96'),
  exact: true,
},
{
  path: '/devops-wiki/blog/tags',
  component: ComponentCreator('/devops-wiki/blog/tags','c7f'),
  exact: true,
},
{
  path: '/devops-wiki/blog/tags/docusaurus',
  component: ComponentCreator('/devops-wiki/blog/tags/docusaurus','f22'),
  exact: true,
},
{
  path: '/devops-wiki/blog/tags/facebook',
  component: ComponentCreator('/devops-wiki/blog/tags/facebook','e95'),
  exact: true,
},
{
  path: '/devops-wiki/blog/tags/hello',
  component: ComponentCreator('/devops-wiki/blog/tags/hello','16d'),
  exact: true,
},
{
  path: '/devops-wiki/blog/tags/hola',
  component: ComponentCreator('/devops-wiki/blog/tags/hola','b16'),
  exact: true,
},
{
  path: '/devops-wiki/blog/welcome',
  component: ComponentCreator('/devops-wiki/blog/welcome','fee'),
  exact: true,
},
{
  path: '/devops-wiki/markdown-page',
  component: ComponentCreator('/devops-wiki/markdown-page','bcb'),
  exact: true,
},
{
  path: '/devops-wiki/docs',
  component: ComponentCreator('/devops-wiki/docs','4f4'),
  
  routes: [
{
  path: '/devops-wiki/docs/intro',
  component: ComponentCreator('/devops-wiki/docs/intro','409'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/devops-wiki/docs/tutorial-basics/congratulations','136'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/devops-wiki/docs/tutorial-basics/create-a-blog-post','a2b'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/devops-wiki/docs/tutorial-basics/create-a-document','f5d'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/devops-wiki/docs/tutorial-basics/create-a-page','23d'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/devops-wiki/docs/tutorial-basics/deploy-your-site','25e'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/devops-wiki/docs/tutorial-basics/markdown-features','08b'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/devops-wiki/docs/tutorial-extras/manage-docs-versions','14f'),
  exact: true,
},
{
  path: '/devops-wiki/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/devops-wiki/docs/tutorial-extras/translate-your-site','538'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
