import { AdoptiumJavaDatasource } from './adoptium-java';
import { BitBucketTagsDatasource } from './bitbucket-tags';
import { CdnJsDatasource } from './cdnjs';
import { ClojureDatasource } from './clojure';
import * as crate from './crate';
import { DartDatasource } from './dart';
import * as docker from './docker';
import { GalaxyDatasource } from './galaxy';
import { GalaxyCollectionDatasource } from './galaxy-collection';
import * as gitRefs from './git-refs';
import * as gitTags from './git-tags';
import * as githubReleases from './github-releases';
import * as githubTags from './github-tags';
import {
  GitlabPackagesDatasource,
  GitlabPackagesType,
} from './gitlab-packages';
import { GitlabReleasesDatasource } from './gitlab-releases';
import * as gitlabTags from './gitlab-tags';
import * as go from './go';
import { GradleVersionDatasource } from './gradle-version';
import { HelmDatasource } from './helm';
import { HexDatasource } from './hex';
import * as jenkinsPlugins from './jenkins-plugins';
import * as maven from './maven';
import { NodeDatasource } from './node';
import * as npm from './npm';
import * as nuget from './nuget';
import { OrbDatasource } from './orb';
import * as packagist from './packagist';
import * as pod from './pod';
import { PypiDatasource } from './pypi';
import * as repology from './repology';
import { RubyVersionDatasource } from './ruby-version';
import * as rubygems from './rubygems';
import * as sbtPackage from './sbt-package';
import * as sbtPlugin from './sbt-plugin';
import { TerraformModuleDatasource } from './terraform-module';
import { TerraformProviderDatasource } from './terraform-provider';
import type { DatasourceApi } from './types';

const api = new Map<string, DatasourceApi>();
export default api;

api.set(AdoptiumJavaDatasource.id, new AdoptiumJavaDatasource());
api.set('bitbucket-tags', new BitBucketTagsDatasource());
api.set('cdnjs', new CdnJsDatasource());
api.set('clojure', new ClojureDatasource());
api.set('crate', crate);
api.set('dart', new DartDatasource());
api.set('docker', docker);
api.set('galaxy', new GalaxyDatasource());
api.set('galaxy-collection', new GalaxyCollectionDatasource());
api.set('git-refs', gitRefs);
api.set('git-tags', gitTags);
api.set('github-releases', githubReleases);
api.set('github-tags', githubTags);
api.set(
  'gitlab-packages',
  new GitlabPackagesDatasource(GitlabPackagesType.None)
);
api.set(
  'gitlab-packages-generic',
  new GitlabPackagesDatasource(GitlabPackagesType.Generic)
);
api.set(
  'gitlab-packages-conan',
  new GitlabPackagesDatasource(GitlabPackagesType.Conan)
);
api.set(
  'gitlab-packages-maven',
  new GitlabPackagesDatasource(GitlabPackagesType.Maven)
);
api.set(
  'gitlab-packages-npm',
  new GitlabPackagesDatasource(GitlabPackagesType.Npm)
);
api.set(
  'gitlab-packages-pypi',
  new GitlabPackagesDatasource(GitlabPackagesType.Pypi)
);
api.set(
  'gitlab-packages-composer',
  new GitlabPackagesDatasource(GitlabPackagesType.Composer)
);
api.set(
  'gitlab-packages-nuget',
  new GitlabPackagesDatasource(GitlabPackagesType.Nuget)
);
api.set(
  'gitlab-packages-helm',
  new GitlabPackagesDatasource(GitlabPackagesType.Helm)
);
api.set(
  'gitlab-packages-golang',
  new GitlabPackagesDatasource(GitlabPackagesType.Golang)
);
api.set('gitlab-tags', gitlabTags);
api.set(GitlabReleasesDatasource.id, new GitlabReleasesDatasource());
api.set('go', go);
api.set('gradle-version', new GradleVersionDatasource());
api.set('helm', new HelmDatasource());
api.set('hex', new HexDatasource());
api.set('jenkins-plugins', jenkinsPlugins);
api.set('maven', maven);
api.set('npm', npm);
api.set(NodeDatasource.id, new NodeDatasource());
api.set('nuget', nuget);
api.set('orb', new OrbDatasource());
api.set('packagist', packagist);
api.set('pod', pod);
api.set('pypi', new PypiDatasource());
api.set('repology', repology);
api.set('ruby-version', new RubyVersionDatasource());
api.set('rubygems', rubygems);
api.set('sbt-package', sbtPackage);
api.set('sbt-plugin', sbtPlugin);
api.set('terraform-module', new TerraformModuleDatasource());
api.set('terraform-provider', new TerraformProviderDatasource());
