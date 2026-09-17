[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WorkflowsApi

# Class: WorkflowsApi

WorkflowsApi - object-oriented interface

## Export

WorkflowsApi

## Extends

- `BaseAPI`

## Implements

- [`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md)

## Constructors

### Constructor

> **new WorkflowsApi**(`configuration?`, `basePath?`, `axios?`): `WorkflowsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`WorkflowsApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### addWorkflow()

> **addWorkflow**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md), `any`, \{ \}, `any`\>\>

Adds a new workflow configuration to the Tenant.

#### Parameters

##### requestParameters

[`WorkflowsApiAddWorkflowRequest`](../interfaces/WorkflowsApiAddWorkflowRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`addWorkflow`](../interfaces/WorkflowsApiInterface.md#addworkflow)

***

### deleteWorkflow()

> **deleteWorkflow**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an existing Workflow from the system.

#### Parameters

##### requestParameters

[`WorkflowsApiDeleteWorkflowRequest`](../interfaces/WorkflowsApiDeleteWorkflowRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`deleteWorkflow`](../interfaces/WorkflowsApiInterface.md#deleteworkflow)

***

### deleteWorkflowVersion()

> **deleteWorkflowVersion**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Deletes a specific version of a Workflow from the system.

#### Parameters

##### requestParameters

[`WorkflowsApiDeleteWorkflowVersionRequest`](../interfaces/WorkflowsApiDeleteWorkflowVersionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`deleteWorkflowVersion`](../interfaces/WorkflowsApiInterface.md#deleteworkflowversion)

***

### getAllWorkflows()

> **getAllWorkflows**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllWorkflows200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllWorkflows200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all workflows configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllWorkflows200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllWorkflows200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`getAllWorkflows`](../interfaces/WorkflowsApiInterface.md#getallworkflows)

***

### getAllWorkflowVersionList()

> **getAllWorkflowVersionList**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`VersionListResponse`](../loginradius-sdk/namespaces/Models/interfaces/VersionListResponse.md), `any`, \{ \}, `any`\>\>

Returns a list of all available versions for a specified Workflow.

#### Parameters

##### requestParameters

[`WorkflowsApiGetAllWorkflowVersionListRequest`](../interfaces/WorkflowsApiGetAllWorkflowVersionListRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VersionListResponse`](../loginradius-sdk/namespaces/Models/interfaces/VersionListResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`getAllWorkflowVersionList`](../interfaces/WorkflowsApiInterface.md#getallworkflowversionlist)

***

### getWorkflowById()

> **getWorkflowById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md), `any`, \{ \}, `any`\>\>

Retrieves details of a specific Workflow using its unique identifier.

#### Parameters

##### requestParameters

[`WorkflowsApiGetWorkflowByIdRequest`](../interfaces/WorkflowsApiGetWorkflowByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`getWorkflowById`](../interfaces/WorkflowsApiInterface.md#getworkflowbyid)

***

### restoreWorkflowVersion()

> **restoreWorkflowVersion**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RestoreWorkflowVersion200Response`](../loginradius-sdk/namespaces/Models/interfaces/RestoreWorkflowVersion200Response.md), `any`, \{ \}, `any`\>\>

Restores a specific version of a Workflow to its active state.

#### Parameters

##### requestParameters

[`WorkflowsApiRestoreWorkflowVersionRequest`](../interfaces/WorkflowsApiRestoreWorkflowVersionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RestoreWorkflowVersion200Response`](../loginradius-sdk/namespaces/Models/interfaces/RestoreWorkflowVersion200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`restoreWorkflowVersion`](../interfaces/WorkflowsApiInterface.md#restoreworkflowversion)

***

### updateWorkflow()

> **updateWorkflow**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md), `any`, \{ \}, `any`\>\>

Updates the configuration of an existing Workflow.

#### Parameters

##### requestParameters

[`WorkflowsApiUpdateWorkflowRequest`](../interfaces/WorkflowsApiUpdateWorkflowRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WorkflowConfig`](../loginradius-sdk/namespaces/Models/interfaces/WorkflowConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WorkflowsApi

#### Implementation of

[`WorkflowsApiInterface`](../interfaces/WorkflowsApiInterface.md).[`updateWorkflow`](../interfaces/WorkflowsApiInterface.md#updateworkflow)
