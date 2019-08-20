# HoloRepository-HoloLens<a href="https://github.com/nbckr/HoloRepository-HoloLens/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/nbckr/HoloRepository-HoloLens"  align="right"/></a><a href="https://github.com/nbckr/HoloRepository-HoloLens/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/nbckr/HoloRepository-HoloLens"  align="right"/></a><a href="https://github.com/nbckr/HoloRepository-HoloLens/blob/master/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/nbckr/HoloRepository-HoloLens"  align="right"/></a><a href="https://www.codefactor.io/repository/github/nbckr/holorepository-hololens"><img alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/nbckr/HoloRepository-HoloLens"  align="right"/></a>


The HoloRepository is a system for transforming medical imaging studies such as CT or MRI scans into 3-dimensional holograms, storing data on a cloud-based platform and making it available for other systems. This repository is dedicated to the portions of the system that are to be deployed on the Microsoft HoloLens:

* **HoloStorageConnector**: A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem.


* **HoloRepository demo application**: A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation.

## Description
<p align="center">
  <img src="https://user-images.githubusercontent.com/11090412/62010805-49d5b180-b167-11e9-8f36-af05454f3a15.png" alt="screenshot" width="65%" hspace="20" vspace="10"/>
</p>

To facilitate the access to the HoloStorage for 3rd party projects and future projects, we provide a library which is distributed as AssetPackage, can be imported into Unity projects and added to Scenes as a configurable GameObject. It provides a layer of abstraction for the network calls and API accesses performed to dynamically load data from the HoloStorage into HoloLens applications at runtime.

To demonstrate the capabilities of the HoloRepository system, it is crucial to have an actual HoloLens application that puts together the pieces (and thereby also acts as an integration test). As an additional benefit, this demo application could be shipped with the Connector library as example scenes.

The demo application will use the HoloStorageConnector to access data stored in the HoloStorage. The data in turn will have been generated through the HoloPipelines workflow or directly uploaded from the HoloRepository. The application will provide a basic UI and list the 3D models stored in the HoloStorage. They can then be loaded and placed, scaled and rotated within the augmented reality.

To our best knowledge, there have been no projects that combine medical holograms and the FHIR standard. This project is the first to close that gap.

## Technologies
The following technologies are used in this component:

* [SimpleJSON](https://wiki.unity3d.com/index.php/SimpleJSON) is used to parse the JSON data.

* [Unity 2018.4.2f1](https://unity3d.com/unity/whats-new/2018.4.2) is the main platform to develop the HoloLens app and connector package.   

* [MRTK v2.0.0 RC2.1](https://github.com/microsoft/MixedRealityToolkit-Unity) is an open source development kit used to develop mixed reality applications.

## Requirements
- [Windows SDK 18362+ ](https://developer.microsoft.com/en-US/windows/downloads/windows-10-sdk) or above
- [Unity 2018.4.x ](https://unity3d.com/unity/whats-new/2018.4.2): include Universal Windows Platform (UWP) and .NET support
- [Visual Studio 2017 ](https://visualstudio.microsoft.com/downloads/): version 15.9.14 or above
- [MRTK V2 ](https://github.com/microsoft/MixedRealityToolkit-Unity): Initially, the MRTK v2.0 has already been imported into this project, you don't need to import the toolkit again. 

The detail of related development tools could be found in [microsoft mixed reality offical site](https://docs.microsoft.com/en-us/windows/mixed-reality/install-the-tools).

This git repository used [Git Large File Storage](https://git-lfs.github.com/) extension to manage the large files, before pulling this repository to your local work station, please ensure you have installed the Git LFS support.

## Development

### Run
Before you start to run the HoloLens App, there are some settings are required in Unity. First, if you pull the application properly from this GitHub, the menu bar should contain the MRTK option. if not, please remove the local files and pull it gain.

<p align="center">
    <img src="https://media.githubusercontent.com/media/nbckr/HoloRepository-HoloLens/dev/HoloRepositoryDemoApplication/Images/MRTK.png" width="60%">
</p>

Go to **Menu bar -> File -> Build setting**, select **Universal Windows Platform**, choose Target Device as **HoloLens**, Architecture as **x86**, Build type as **D3D**, Visual Studio Version as **Visual Studio 2017**, select the **Unity C# Projects** option in Debugging.

<p align="center">
    <img src="https://media.githubusercontent.com/media/nbckr/HoloRepository-HoloLens/dev/HoloRepositoryDemoApplication/Images/BuildSetting.png" width="50%">
</p>

If the Unity C# Projects option is not available, please go to **Player Settings**, and choose **.NET** as Scripting Backend in Other Settings.

<p align="center">
    <img src="https://media.githubusercontent.com/media/nbckr/HoloRepository-HoloLens/dev/HoloRepositoryDemoApplication/Images/OtherSetting.png" width="40%">
</p>

Meanwhile, Please select **Visual Reality Supported** in XR Settings

<p align="center">
    <img src="https://media.githubusercontent.com/media/nbckr/HoloRepository-HoloLens/dev/HoloRepositoryDemoApplication/Images/XRSettings.png" width="40%">
</p>

### Run the app in Game mode
If you have setup the environment and settings, please open the **BaseScene** in Scenes folder, and press Play Button to try it.

## Build and deployment
You can build and deploy the application both in HoloLens emulator and the HoloLens devices.

Go to **Menu bar -> File -> Build setting**, before you build the application, please make sure all the compile errors are fixed and all environment setting is correct. Then select **Build** button and choose a folder to store the generated solution.

Use Visual Studio to open the generated **.sln** file, then Select an **x86** build configuration for the app, you can both select **Remote Machine** or **HoloLens Emulator** as the target device, if you select remote machine, it requires the IP address of your HoloLens to make the connection. Finally, Select **Debug -> Start debugging** to deploy your app and start debugging.

<p align="center">
    <img src="https://media.githubusercontent.com/media/nbckr/HoloRepository-HoloLens/dev/HoloRepositoryDemoApplication/Images/Deploy.png" width="40%">
</p>

The details of the deployment steps and other deploy methods are available in [microsoft mixed reality offical site](https://docs.microsoft.com/en-us/windows/mixed-reality/using-visual-studio).

