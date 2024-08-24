import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async indexBranch(branch: any) {
    return this.elasticsearchService.index({
      index: 'branches',
      body: branch,
    });
  }

  async search(index: string, query: any) {
    return this.elasticsearchService.search({
      index: index,
      body: query,
    });
  }
}