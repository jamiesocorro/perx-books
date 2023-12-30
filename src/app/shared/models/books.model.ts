export interface BooksModel {
  id: string;
  type: string;
  links: BooksLinksModel;
  attributes: BooksAttributesModel;
  relationships: BooksRelationshipsModel;
}

export interface BooksLinksModel {
  self: string;
}

export interface BooksAttributesModel {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties?: any;
  display_properties: BooksAttributesDisplayPropertiesModel;
}

export interface BooksAttributesDisplayPropertiesModel {
  type: string;
  image: string;
}

export interface BooksRelationshipsModel {
  authors: BooksRelationshipLinksModel;
  publishers: BooksRelationshipLinksModel;
}

export interface BooksRelationshipLinksModel {
  links: BooksLinksModel;
}

export interface BooksLinksModel {
  self: string;
  related?: string;
}
