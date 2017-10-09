# shoespace-online
A WebDNN implementation of a variational autoencoder trained on the shoe sector of Fashion-MNIST

Hosted at https://petosegan.github.io/shoespace-online/

# What is this?
A variational autoencoder is a neural network that is trained to embed high dimensional data (such as images) into a lower-dimensional space. This one has been trained to encode 28x28 black and white pictures of shoes into a two-dimensional space.

The network was trained on the shoe images from the [Fashion-MNIST](https://www.kaggle.com/zalando-research/fashionmnist) using Keras. The trained weights were converted to [WebDNN](https://mil-tokyo.github.io/webdnn/) with a WebGL background for performing inference in the browser.
