import { FilterQuery, Model, QueryOptions, SaveOptions, UpdateQuery, UpdateWithAggregationPipeline, PipelineStage, AggregateOptions, Callback, ProjectionType } from 'mongoose';
import { CreatedModel, RemovedModel, UpdatedModel } from './entity';
export declare class Repository<T> {
    private readonly model;
    constructor(model: Model<T>);
    create(doc: object, saveOptions?: SaveOptions): Promise<CreatedModel>;
    find(filter: FilterQuery<T>, options?: QueryOptions<T>): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    findOne(filter: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions): Promise<T | null>;
    findAll(): Promise<T[]>;
    aggregate(pipeline: PipelineStage[], options?: AggregateOptions, callback?: Callback<T[]>): Promise<T[]>;
    remove(filter: FilterQuery<T>): Promise<RemovedModel>;
    updateOne(filter: FilterQuery<T>, updated: UpdateWithAggregationPipeline | UpdateQuery<T>, options?: QueryOptions): Promise<UpdatedModel>;
    updateMany(filter: FilterQuery<T>, updated: UpdateWithAggregationPipeline | UpdateQuery<T>, options?: QueryOptions): Promise<UpdatedModel>;
}
