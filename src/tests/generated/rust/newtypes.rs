/** GENERATED BY BENDEC TYPE GENERATOR */
#[allow(unused_imports)]
use serde::{Deserialize, Deserializer, Serialize, Serializer};

// primitive built-in: u8

/// Public description
pub struct Public(pub u8);

/// Generated description
#[derive(Foo, Bar)]
pub struct WithNew(u8);

impl WithNew {
  pub fn new(v: u8) -> Self {
    Self(v)
  }
}

/// Generated description
pub struct WithDeref(u8);

impl std::ops::Deref for WithDeref {
  type Target = u8;
  fn deref(&self) -> &Self::Target {
    &self.0
  }
}

/// Generated description
pub struct WithIntoInner(u8);

impl WithIntoInner {
  pub fn into_inner(self) -> u8 {
    self.0
  }
}

/// Generated description
pub struct WithAsInner(u8);

impl WithAsInner {
  pub fn as_inner(&self) -> u8 {
    self.0
  }
}

/// InPath description
pub struct InPath(pub(in path::foo::bar) u8);

/// InCrate description
pub struct InCrate(pub(crate) u8);

pub struct FooArray(pub [u8; 10]);

