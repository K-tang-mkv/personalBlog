---
title: Convolutional Neural Network
date: 2021-10-21T14:06:49.298Z
---

In this article, we'll cover the convolutional neural networks(CNNs). **CNNs** are the standard neural network architecture used for prediction when the input observations are images. We'll start this article by reviewing some basic elements of these neural networks and use them to motivate why we might want to use a different architecture for images. 
## Content

* Neural Networks and Representation learning
* 
* 

### Neural Networks and Representation learning
Neural networks initially receives data on observations, with each observation represented by some number of features. A general way in the process of making predictions by the model from observations is linear combination of original features. Such as an image is made up with pixels which are the features as input for the model. Let's say a digit image from [MNIST](https://en.wikipedia.org/wiki/MNIST_database) with 784 pixels and we define the pixel values as features is from $x_1$ to $x_{784}$. Use these features to make linear combination with a group of weight parameters and there are a lot of different combinations which stand for different important level of each feature for the prediction. Neural networks can automaticallyy discover combinations of the original features that are important through the training process. That process starts by creating initially random combinations of the original features via multiplication by a random weight matrix; through training, the neural network learns to refine combinations that are helpful and discard those that aren’t. This process of learning which combinations of features are important is known as representation learning, and it’s the main reason why neural networks are successful across different domains. 

