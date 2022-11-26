import { FilterQuery, Model, QueryOptions, SaveOptions, UpdateQuery, UpdateWithAggregationPipeline, PipelineStage, AggregateOptions, Callback, ProjectionType } from 'mongoose';
import { CreatedModel, RemovedModel, UpdatedModel } from './entity';

export class Repository<T> {
  constructor(private readonly model: Model<T>) {}

  async create(doc: object, saveOptions?: SaveOptions): Promise<CreatedModel> {

    const createdEntity = new this.model(doc);
    const savedResult = await createdEntity.save(saveOptions);
    return { id: savedResult.id, created: !!savedResult.id };
  }

  async find(filter: FilterQuery<T>, options?: QueryOptions<T>): Promise<T[]> {
    return await this.model.find(filter, null, options);
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id);
  }
  async findOne(filter: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions): Promise<T | null> {
    return await this.model.findOne(filter, projection, options);
  }

  async findAll(): Promise<T[]> {
    return await this.model.find();
  }
  async aggregate(pipeline: PipelineStage[], options?: AggregateOptions, callback?: Callback<T[]>): Promise<T[]> {
    return await this.model.aggregate(pipeline, options, callback);
  }

  async remove(filter: FilterQuery<T>): Promise<RemovedModel> {
    const { deletedCount } = await this.model.remove(filter);
    return { deletedCount, deleted: !!deletedCount };
  }

  async updateOne(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<UpdatedModel> {
    return await this.model.updateOne(filter, updated, options);
  }

  async updateMany(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<UpdatedModel> {
    return await this.model.updateMany(filter, updated, options);
  }
}
