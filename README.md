[![Compile LaTeX](https://github.com/Kkobarii/master-thesis/actions/workflows/compile.yml/badge.svg)](https://github.com/Kkobarii/master-thesis/actions/workflows/compile.yml)
### My Master Thesis
# Interactive Tool for Visualizing Algorithms and Data Structures

This repo hosts the code and documentation for my master thesis.

## Assignment

The purpose of the project is to create a web tool for visualizing data structures (e.g., stack, queue, lists, trees) and simulating algorithms (sorting and searching algorithms). The application will serve as an educational resource, enabling interactive operations and theoretical explanations of individual data structures and algorithms.

I'm currently working on it. You can find the text on my [thesis website](https://thesis.kkobari.eu/). The app itself is also a work in progress and can be found [here](https://treeline.kkobari.eu/), with the repo [here](https://github.com/Kkobarii/Treeline). Again, it's far from finished so don't expect too much (like a working app or something).

## How to Build

Not gonna lie, the build process is quite a pain. My setup process consists of opening the repo in VS Code with the LaTeX Workshop extension installed, compiling it through that, and fixing any issues that come up.

Some notes that might help you build it locally:

- Make sure you have a reasonably complete TeX distribution (TeX Live or MikTeX) because the project uses many packages. You can install them through your distribution's package manager or use the package manager that comes with your TeX distribution.
- Some things to have:
    - `biber` (for bibliography processing).
    - `inkscape` and a Java runtime (required for PlantUML/diagram generation).
    - Czech localization files for LaTeX (`texlive-lang-czech`).

Good luck out there!

## Continuous Integration

This repository has a very neat and very useless GitHub Actions workflow (`.github/workflows/compile.yml`) that builds the PDF on push and pull requests and uploads the compiled `master.pdf` as an artifact. The output file is then uploaded to my [thesis repo](https://github.com/Kkobarii/thesis), so you can always find the latest version there.

## Contributing

If you find any typos or mistakes in the thesis, feel free to open an issue or a pull request.
